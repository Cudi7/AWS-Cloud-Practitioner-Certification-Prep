export default function Footer() {
  return (
    <footer className="container w-full pb-6 pt-16 text-center text-xs text-gray-600 dark:text-gray-400">
      <p className="mx-auto mb-2 max-w-xl">
        This practice quiz is independently created and is not affiliated with
        or endorsed by Amazon Web Services{" "}
        <span className="text-indigo-500 dark:text-indigo-400">(AWS)</span>. It
        is intended to support those preparing for the AWS Cloud Practitioner{" "}
        <span className="text-indigo-500 dark:text-indigo-400">(CLF-C02)</span>{" "}
        exam and is not a replacement for official AWS study materials.
      </p>
      <p className="font-semibold">
        Developed by{" "}
        <a
          href="https://www.linkedin.com/in/cudi7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 hover:underline dark:text-indigo-400"
        >
          Cudi
        </a>
      </p>
    </footer>
  );
}
