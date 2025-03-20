import * as api from "./api";
import { mapMembersToVM } from "./list.mappers";

export const getMembers = () => api.getMembers().then(mapMembersToVM);
