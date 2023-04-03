import axios from "axios";
import {
  Data,
  Locate,
  Coordinate,
  ContactsInfo,
  Features,
  Result,
} from "./models/Apartment";
import {
  Feed,
  FeedPayload,
  FeedResponseOnCreate,
  Filter,
  OtherFilter,
  QueryFilter,
} from "./models/Feed";
import { Type } from "./models/Types";
const baseUrl = "https://api.casafari.com/v1";

export default (token: string) => {
  const config = { headers: { Authorization: token } };

  const setToken = (token: string) => {
    config.headers.Authorization = token;
  };
  const getTypes = async () =>
    (await axios.get<Type[]>(`${baseUrl}/references/types`, config)).data;

  const getFeeds = async (params?: Partial<QueryFilter>) =>
    (
      await axios.get<Feed[]>(`${baseUrl}/listing-alerts/feeds`, {
        ...config,
        params,
      })
    ).data;

  const createFeed = async (body: FeedPayload) =>
    (
      await axios.post<FeedResponseOnCreate>(
        `${baseUrl}/listing-alerts/feeds`,
        body,
        config
      )
    ).data;

  const deleteFeed = async (id: number) =>
    (
      await axios.delete<{ success: boolean }>(
        `${baseUrl}/listing-alerts/feeds/${id}`,
        config
      )
    ).data;

  const getFeed = async (id: number) =>
    (await axios.get<Data>(`${baseUrl}/listing-alerts/feeds/${id}`, config))
      .data;

  return {
    getFeed,
    deleteFeed,
    createFeed,
    getFeeds,
    getTypes,
    setToken,
  };
};

export {
  Feed,
  FeedPayload,
  FeedResponseOnCreate,
  Filter,
  OtherFilter,
  QueryFilter,
  Data,
  Type,
  Locate,
  Coordinate,
  ContactsInfo,
  Features,
  Result,
};
