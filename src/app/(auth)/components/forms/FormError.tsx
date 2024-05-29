interface Props {
  errorMessage: string;
}

export const FormError = (props: Props) => {
  const { errorMessage } = props;

  return (
    <div className="text-center bg-red-200 text-sm text-red-800 p-3 rounded-md border border-red-800">
      {errorMessage}
    </div>
  );
};
