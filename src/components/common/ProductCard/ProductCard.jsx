import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  return (
    <Card
      sx={{
        maxWidth: 250,
        padding: "15px",
        backgroundColor: "#C3DBD9",
        boxShadow: "0 2px 8px 3px rgb(10 5 5 / 50%)",
        borderRadius: "10px",
      }}
    >
      <CardMedia
        component="img"
        alt="producto"
        height="220"
        style={{
          borderRadius: "10px",
        }}
        image={item.img}
      />
      <CardContent>
        <Typography
          sx={{ wordWrap: "break-word" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/item-detail/${item.id}`}>
          <Button variant="contained" color="secondary" size="small">
            Ver detalles
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
