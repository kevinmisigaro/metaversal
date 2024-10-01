function OutlineButton({ text }: { text: string }) {
  return (
    <div className="hover:bg-[#ece9fa] text-[#6c1ec9] cursor-pointer border border-[#6c1ec9] text-center font-[600] w-20 py-1 text-sm rounded-full">
      {text}
    </div>
  );
}

export default OutlineButton;
