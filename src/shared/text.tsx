const handleTextChange = (
  e: React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
  >,
  setStateFn: React.Dispatch<React.SetStateAction<string>>
) => setStateFn(e.target.value);

export { handleTextChange };
