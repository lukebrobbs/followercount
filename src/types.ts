export interface IYouTubeUserData {
    kind: string;
    etag: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
    items: {
        kind: string;
        etag: string;
        id: string;
        statistics: {
            viewCount: string;
            commentCount: string;
            subscriberCount: string;
            hiddenSubscriberCount: boolean;
            videoCount: string;
        };
    }[];
}

export interface IFollowerCount {
    followerCount: string;
}
