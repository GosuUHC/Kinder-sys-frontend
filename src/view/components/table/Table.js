import { Card, Typography } from "@material-tailwind/react";
import { useState } from "react";
import s from "./Table.module.scss";
import useDiagnostics from "../../../viewmodel/hooks/diagnostics/useDiagnostics";
import useAuth from "../../../viewmodel/hooks/auth/useAuth";
import DiagnosticsForm from "../forms/diagnostics/DiagnosticsForm";
import { MyButton } from "../button/MyButton";
import useGroups from "../../../viewmodel/hooks/groups/useGroups";
import ChildData from "./childData/ChildData";

const TABLE_HEAD = ["№", "ФИО", "Начало года", "Конец  года"];
const Table = () => {
  const { diagnosticsData, groupId, handleAddDiagnostics, handleDelete } =
    useDiagnostics();
  const { groupsData } = useGroups();

  const filteredGroupsData = groupsData.filter(
    (group) => group.id === groupId,
  )[0];

  const { role } = useAuth();
  const [isFormActive, setIsFormActive] = useState(false);

  const toggleForm = () => setIsFormActive(!isFormActive);

  const handleAddData = (newData) => {
    handleAddDiagnostics(newData);
  };

  return (
    <div className="relative">
      <Card className={`h-full w-full overflow-y-auto ${s.table}`}>
        <table className="w-full min-w-max table-auto text-left">
          <caption className="border-b border-blue-gray-100 bg-blue-gray-100 p-3">
            Категория
          </caption>
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
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
            {diagnosticsData.map(
              ({ id: diagId, childId, startScore, endScore }, index) => {
                const isLast = index === diagnosticsData.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={childId} className="even:bg-blue-gray-50/50">
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
                        <ChildData
                          data={
                            filteredGroupsData.children.filter(
                              (child) => child.id === childId,
                            )[0]
                          }
                        />
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {startScore}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {endScore}
                      </Typography>
                    </td>
                    {/* <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        <DeleteButton onDelete={ />
                      </Typography>
                    </td> */}
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
        <MyButton text={"+"} func={toggleForm}></MyButton>
      </Card>

      <DiagnosticsForm
        isActive={isFormActive}
        toggleActive={toggleForm}
        onSubmit={handleAddData}
      />
    </div>
  );
};

export default Table;
