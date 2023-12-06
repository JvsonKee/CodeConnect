import { Topic } from "./TopicBubble.styled"
import propTypes from 'prop-types'
import { useNavigate } from "react-router-dom"
import { topicDatabase } from "../../database/db";

function TopicBubble( {topicName, isGuestView} ) {
    const navigate = useNavigate();

    const handleClick = () => {
        let topics = [];

        topicDatabase.forEach((topic) => {
            if (topic.name === topicName) {
                topic.posts.forEach((post) => {
                    topics.push(post);
                })
            }
        })
        navigate(`/CodeConnect/explore-results/${topicName}`, {state: {results: topics, searchTerm: topicName, isGuestView: isGuestView}});
    }

    return (
        <Topic onClick={handleClick}>{topicName}</Topic>
    )
}

TopicBubble.propTypes = {
    topicName : propTypes.string
}


export default TopicBubble