import { useDispatch, useSelector } from "react-redux";
// import { useGetGroupsQuery } from "../../../transport/groups";

const useGroups = () => {
  const dispatch = useDispatch();
  // const { data: groupsData = [], isSuccess } = useGetGroupsQuery();

  const groupsData = [
    {
      id: 1,
      children: [
        {
          id: 1,
          firstName: "Александр",
          lastName: "Иванов",
          middleName: "Алексеевич",
        },
        {
          id: 2,
          firstName: "Мария",
          lastName: "Петрова",
          middleName: "Владимировна",
        },
        {
          id: 3,
          firstName: "Дмитрий",
          lastName: "Сидоров",
          middleName: "Игоревич",
        },
        {
          id: 4,
          firstName: "Анна",
          lastName: "Смирнова",
          middleName: "Сергеевна",
        },
        {
          id: 5,
          firstName: "Иван",
          lastName: "Кузнецов",
          middleName: "Михайлович",
        },
        {
          id: 6,
          firstName: "Елена",
          lastName: "Новикова",
          middleName: "Андреевна",
        },
        {
          id: 7,
          firstName: "Сергей",
          lastName: "Морозов",
          middleName: "Александрович",
        },
        {
          id: 8,
          firstName: "Ольга",
          lastName: "Лебедева",
          middleName: "Евгеньевна",
        },
        {
          id: 9,
          firstName: "Николай",
          lastName: "Козлов",
          middleName: "Павлович",
        },
      ],
    },
    {
      id: 2,
      children: [
        {
          id: 10,
          firstName: "Владимир",
          lastName: "Васильев",
          middleName: "Петрович",
        },
        {
          id: 11,
          firstName: "Анастасия",
          lastName: "Зайцева",
          middleName: "Игоревна",
        },
        {
          id: 12,
          firstName: "Максим",
          lastName: "Соколова",
          middleName: "Андреевич",
        },
        {
          id: 13,
          firstName: "Юлия",
          lastName: "Михайлова",
          middleName: "Сергеевна",
        },
        {
          id: 14,
          firstName: "Алексей",
          lastName: "Федоров",
          middleName: "Владимирович",
        },
        {
          id: 15,
          firstName: "Наталья",
          lastName: "Борисова",
          middleName: "Николаевна",
        },
        {
          id: 16,
          firstName: "Виктор",
          lastName: "Тихонов",
          middleName: "Александрович",
        },
        {
          id: 17,
          firstName: "Ирина",
          lastName: "Орлова",
          middleName: "Михайловна",
        },
        {
          id: 18,
          firstName: "Егор",
          lastName: "Павлов",
          middleName: "Дмитриевич",
        },
      ],
    },
    {
      id: 3,
      children: [
        {
          id: 19,
          firstName: "Иван",
          lastName: "Андреев",
          middleName: "Евгеньевич",
        },
        {
          id: 20,
          firstName: "Вера",
          lastName: "Степанова",
          middleName: "Ивановна",
        },
        {
          id: 21,
          firstName: "Константин",
          lastName: "Иванов",
          middleName: "Павлович",
        },
        {
          id: 22,
          firstName: "Татьяна",
          lastName: "Волкова",
          middleName: "Александровна",
        },
        {
          id: 23,
          firstName: "Артем",
          lastName: "Киселев",
          middleName: "Юрьевич",
        },
        {
          id: 24,
          firstName: "Екатерина",
          lastName: "Григорьева",
          middleName: "Олеговна",
        },
        {
          id: 25,
          firstName: "Григорий",
          lastName: "Яковлев",
          middleName: "Михайлович",
        },
        {
          id: 26,
          firstName: "Светлана",
          lastName: "Макарова",
          middleName: "Петровна",
        },
        {
          id: 27,
          firstName: "Денис",
          lastName: "Афанасьев",
          middleName: "Сергеевич",
        },
      ],
    },
  ];

  return {
    groupsData,
  };
};

export default useGroups;
