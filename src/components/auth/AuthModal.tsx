import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp";

const supabase = createClient();

export function AuthModal({ 
  trigger, 
  defaultMode = "login" 
}: { 
  trigger: React.ReactNode; 
  defaultMode?: "login" | "register" 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"login" | "register" | "verify">(defaultMode);
  const [isLoading, setIsLoading] = useState(false);
  
  // Campos
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [otp, setOtp] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (mode === "register") {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: name,
            }
          }
        });
        if (error) throw error;
        
        // O Supabase, por segurança, não retorna erro direto quando o email já existe.
        // Ele retorna a lista "identities" vazia caso o e-mail já esteja em uso.
        if (data?.user?.identities && data.user.identities.length === 0) {
          toast.error("Este e-mail já está cadastrado na plataforma.");
          setIsLoading(false);
          return;
        }

        toast.success("Código enviado! Verifique seu email.");
        setMode("verify"); // Troca para a tela de digitar o código
      } else if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        toast.success("Login realizado com sucesso!");
        setIsOpen(false);
      } else if (mode === "verify") {
        const { data, error } = await supabase.auth.verifyOtp({
          email,
          token: otp,
          type: "signup"
        });
        if (error) throw error;
        toast.success("E-mail verificado com sucesso! Bem-vindo!");
        setIsOpen(false);
      }
    } catch (error: any) {
      toast.error(error.message || "Ocorreu um erro na autenticação.");
    } finally {
      setIsLoading(false);
    }
  };

  // Reseta o estado quando o modal for fechado
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Quando fechar, volta pro estado padrão pra não ficar preso na tela de OTP
      setTimeout(() => {
        setMode(defaultMode);
        setOtp("");
        setPassword("");
      }, 300);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md bg-[#0a0a0a] border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight">
            {mode === "login" && "Bem-vindo de volta"}
            {mode === "register" && "Crie sua conta"}
            {mode === "verify" && "Confirme seu E-mail"}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            {mode === "login" && "Entre para acessar seus cursos e progresso."}
            {mode === "register" && "Junte-se à DevWeb.Ai e decole na sua carreira."}
            {mode === "verify" && `Enviamos um código de 6 dígitos para ${email}.`}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {mode === "register" && (
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input 
                id="name" 
                placeholder="Ex: João Silva" 
                required 
                className="bg-[#111] border-white/10 focus-visible:ring-indigo-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          
          {(mode === "login" || mode === "register") && (
            <>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="seu@email.com" 
                  required 
                  className="bg-[#111] border-white/10 focus-visible:ring-indigo-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  required 
                  className="bg-[#111] border-white/10 focus-visible:ring-indigo-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </>
          )}

          {mode === "verify" && (
            <div className="flex flex-col items-center justify-center space-y-4 py-4">
              <InputOTP maxLength={8} value={otp} onChange={setOtp} required>
                <InputOTPGroup>
                  <InputOTPSlot index={0} className="border-white/20 bg-[#111]" />
                  <InputOTPSlot index={1} className="border-white/20 bg-[#111]" />
                  <InputOTPSlot index={2} className="border-white/20 bg-[#111]" />
                  <InputOTPSlot index={3} className="border-white/20 bg-[#111]" />
                </InputOTPGroup>
                <InputOTPSeparator className="text-gray-500" />
                <InputOTPGroup>
                  <InputOTPSlot index={4} className="border-white/20 bg-[#111]" />
                  <InputOTPSlot index={5} className="border-white/20 bg-[#111]" />
                  <InputOTPSlot index={6} className="border-white/20 bg-[#111]" />
                  <InputOTPSlot index={7} className="border-white/20 bg-[#111]" />
                </InputOTPGroup>
              </InputOTP>
              <p className="text-xs text-gray-500">
                Não recebeu? Verifique sua caixa de spam.
              </p>
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full bg-white text-black hover:bg-gray-200 mt-2 font-semibold"
            disabled={isLoading || (mode === "verify" && otp.length < 8)}
          >
            {isLoading 
              ? "Processando..." 
              : mode === "login" 
                ? "Entrar" 
                : mode === "register" 
                  ? "Cadastrar" 
                  : "Verificar Código"}
          </Button>
        </form>

        {mode !== "verify" && (
          <div className="text-center mt-4 text-sm text-gray-400">
            {mode === "login" ? (
              <>
                Não tem uma conta?{" "}
                <button 
                  type="button" 
                  onClick={() => setMode("register")}
                  className="text-white hover:underline underline-offset-4 font-medium"
                >
                  Cadastre-se
                </button>
              </>
            ) : (
              <>
                Já possui conta?{" "}
                <button 
                  type="button" 
                  onClick={() => setMode("login")}
                  className="text-white hover:underline underline-offset-4 font-medium"
                >
                  Faça login
                </button>
              </>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
