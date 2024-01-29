type FullPageWrapperProps = {
    error?: Error | null;
  };

  export function FullPageError(props: FullPageWrapperProps) {
    const { error } = props;
    return (
        <h1>Bad error {error?.message}</h1>
    )
}