import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'glass';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  as?: 'button' | 'a';
  href?: string;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  className = '', 
  as = 'button',
  href,
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium transition-all duration-300";
  
  const variants = {
    primary: "bg-primary hover:bg-primary-hover text-white hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 shadow-lg",
    secondary: "bg-charcoal hover:bg-primary text-white hover:scale-[1.02] shadow-lg",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    glass: "bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white hover:scale-[1.02] shadow-lg",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (as === 'a' || href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
