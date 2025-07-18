import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Project } from '../types/projects';
import baseURL from '../utils/config';
import { HTTP_VERBS } from '../utils/httpVerbs';

export const projectsApiSlice = createApi({
    reducerPath: 'projectsApiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (builder) => ({
        getProjects: builder.query<Project[], void>({
            query: () => ({
                url: '/projects',
                method: HTTP_VERBS.GET,
            }),
        }),
    }),
});

export const { useGetProjectsQuery } = projectsApiSlice;
