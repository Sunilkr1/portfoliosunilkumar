const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6 border-t border-gray-200 dark:border-gray-700">
      <div className="text-center text-gray-600 dark:text-gray-400 text-sm tracking-wide">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          Sunil Kumar
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
