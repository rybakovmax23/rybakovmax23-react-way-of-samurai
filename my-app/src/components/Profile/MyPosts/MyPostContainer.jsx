import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profile-reducer";
import { MyPosts } from "./MyPosts";
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}


export const MyPostsContainer  = connect(mapStateToProps, mapDispatchToProps)(MyPosts)