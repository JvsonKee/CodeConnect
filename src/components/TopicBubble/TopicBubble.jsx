import { Topic } from "./TopicBubble.styled"
import propTypes from 'prop-types'

function TopicBubble( {topicName} ) {
    return (
        <Topic>{topicName}</Topic>
    )
}

TopicBubble.propTypes = {
    topicName : propTypes.string
}


export default TopicBubble