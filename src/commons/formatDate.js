const format = ({ date }) => (
  new Intl.DateTimeFormat(
    'en-US',
    {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    }).format(date)
);

export default format;
