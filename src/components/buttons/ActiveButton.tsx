function ActiveButton({ text }: { text: string }) {
  return (
    <div className="bg-[#6c1ec9] text-white text-center cursor-pointer w-20 py-1 text-sm rounded-full">
      {text}
    </div>
  );
}

export default ActiveButton;
