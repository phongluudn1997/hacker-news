function LoadMoreButton(props: any) {
  return (
    <button
      className="p-2 bg-primary-400 font-medium rounded hover:bg-primary-500 transition ease-in-out duration-100"
      {...props}
    >
      Load more...
    </button>
  );
}

export { LoadMoreButton };
