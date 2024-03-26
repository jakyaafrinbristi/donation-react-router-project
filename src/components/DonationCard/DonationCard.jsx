import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";

const DonationCard = ({data}) => {
    const { id, title, category, image, cardBg, textColor, categoryBg } =
    data || {};
    return (
        <div>
            <Card style={{ backgroundColor: cardBg }}className="w-full max-w-[48rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={image}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
      <Button
            size="sm"
            className="mb-2"
            style={{ backgroundColor: categoryBg, color: textColor }}
          >
            {category}
          </Button>
        <Typography variant="h4" color="blue-gray" className="mb-2">
    {title}
        </Typography>
        <Button style={{ backgroundColor: textColor }} size="md">
            View Details
          </Button>
       
      </CardBody>
    </Card>
        </div>
    );
};

export default DonationCard;