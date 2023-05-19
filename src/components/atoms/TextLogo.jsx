import Logo from "@/components/atoms/Logo";

const TextLogo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8">
        <Logo />
      </div>
      <h1 className="t3">opine</h1>
    </div>
  );
};

export default TextLogo;
