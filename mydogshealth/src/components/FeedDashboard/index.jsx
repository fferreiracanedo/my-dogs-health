import { Box } from "@chakra-ui/react"
import CardFeed from "../CardFeed"

const FeedDashboard = ({ arrayFeed }) => {
    return (
        <Box
            display="grid"
        >
            <Box 
                fontSize="2.5rem"
                color="#2B2424"
                justifySelf="center"
                fontWeight="bold"
            >
                Feed
            </Box>
            {
                arrayFeed.map((feed) => {
                    return (
                        <CardFeed title={feed.titulo} text={feed.texto}/>
                    )
                })
            }
        </Box>
    )
}

export default FeedDashboard