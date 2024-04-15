import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Recommendation = ({data}) => {
  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {data}
        </Typography>
        <Typography>Recommendation to ..... .... ....</Typography>
      </CardBody>
    </Card>
  );
};

export default Recommendation;
