import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import s from './Recommendation.module.scss'

const Recommendation = ({data}) => {
  return (
    <Card className={`mt-6 ${s.recommendation}`}>
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
