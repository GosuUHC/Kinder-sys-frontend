import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 right-0 border-blue-gray-50 flex w-full flex-row flex-wrap items-center justify-center gap-x-12 gap-y-6 border-t p-6 text-center md:justify-between bg-white">
      <Typography color="blue-gray" className="font-normal">
        &copy; Kinder_sys
      </Typography>
      <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
        <li>
          <Typography    
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            О нас
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Информация
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Бла бла
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Контакты
          </Typography>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
