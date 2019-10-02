import axios from 'axios';

export const InstagramFollowerCountRequest = async (username: string) => {
    try {
        const user = await axios(`https://www.instagram.com/${username}?__a=1`);
        return { followerCount: user.data.graphql.user.edge_followed_by.count };
    } catch (err) {
        throw new Error(err);
    }
};
