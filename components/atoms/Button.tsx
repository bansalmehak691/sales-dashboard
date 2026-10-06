interface ButtonProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  active = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
        active
          ? "bg-blue-600 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {children}
    </button>
  );
}