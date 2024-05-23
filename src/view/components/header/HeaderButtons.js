import useUser from "../../../viewmodel/hooks/auth/useAuth";

const HeaderButtons = () => {
  const { role } = useUser();

  return (
    <>
      <a href="/main" className="text-md font-semibold leading-2 text-gray-900">
        Главная
      </a>
      {/* <a href="#" className="text-md font-semibold leading-2 text-gray-900">
        Страница админа
      </a> */}
      <a href="/analytics" className="text-md font-semibold leading-2 text-gray-900">
        Страница аналитика
      </a>
    </>
  );
};

export default HeaderButtons;
