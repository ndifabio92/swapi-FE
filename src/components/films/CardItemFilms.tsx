import { Link } from "react-router-dom";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { getImage } from '../../shared/getImage';
import { Result } from "../../interfaces/Film";
import '../styles/cards.css';
import '../styles/img.css';
import { ResourceType } from "../types/ResourceType";

interface Props {
    item: Result
}

export const CardItemFilms = ({ item }: Props) => {
    const id = item?.url?.split("/")[5];
    return (
        <Card className="root card">
            <div className="container-img">
                <img className="img-card" src={getImage({ resource: ResourceType.Films, title: item.title })} alt={item.title} />
            </div>
            <CardContent>
                <Typography className="title">{item.title}</Typography>
                <Typography className="title">
                    {item.release_date}
                </Typography>
                <br />
                <Typography className="description">
                    <span>Director</span> {item.director}
                </Typography>
                <Typography className="description">
                    <span>Producers</span> {item.producer}
                </Typography>
                <br />
                <Typography className="description">
                    {item.opening_crawl}
                </Typography>
            </CardContent>
            <Button className="btn-character" variant="outlined">
                <Link className="link-character" to={`/films/${id}`}>
                    Read More...
                </Link>
            </Button>
        </Card>

    );
};