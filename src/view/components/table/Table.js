import { Card, Typography } from "@material-tailwind/react";
import s from './Table.module.scss'

const TABLE_HEAD = ["№","ФИО", "Начало года", "Конец  года"];

const TABLE_ROWS = [
  {
    name: "Имя Фамилия Отчество",
    start: "1",
    end: "2",
  },
  {
    name: "Имя Фамилия Отчество",
    start: "1",
    end: "2",
  },
  {
    name: "Child 3",
    start: "1",
    end: "2",
  },
  {
    name: "Child 4",
    start: "1",
    end: "2",
  },
  {
    name: "Child 5",
    start: "1",
    end: "2",
  },
  {
    name: "Child 6",
    start: "1",
    end: "2",
  },
  {
    name: "Child 7",
    start: "1",
    end: "2",
  },
];

const Table = () => {
  return (
    <Card className={`h-full w-full overflow-y-auto ${s.table}`}>
      <table className="w-full min-w-max table-auto text-left " >
      <caption className="border-blue-gray-100 bg-blue-gray-100 border-b p-3"> Категория </caption>
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-blue-gray-100 bg-blue-gray-50 border-b p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-80"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, start, end }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={name} className="even:bg-blue-gray-50/50">
                
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {`#${index + 1}`}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {start}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {end}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default Table;
