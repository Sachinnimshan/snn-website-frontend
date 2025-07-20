import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Project } from '../types/projects';
import baseURL from '../utils/config';
import { HTTP_VERBS } from '../utils/httpVerbs';
import type { Experience } from '../types/experience';
import type { Education } from '../types/education';


export interface ContactPayload {
    name: string;
    email: string;
    message: string;
}

export const webApiSlice = createApi({
    reducerPath: 'webApiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (builder) => ({
        getProjectList: builder.query<Project[], void>({
            query: () => ({
                url: '/projects',
                method: HTTP_VERBS.GET,
            }),
        }),
        getExperienceList: builder.query<Experience[], void>({
            query: () => ({
                url: '/experience',
                method: HTTP_VERBS.GET,
            }),
        }),
        getAcademicList: builder.query<Education[], void>({
            query: () => ({
                url: '/education',
                method: HTTP_VERBS.GET,
            }),
        }),
        postContact: builder.mutation<void, ContactPayload>({
            query: (payload) => ({
                url: '/contact',
                method: HTTP_VERBS.POST,
                body: payload,
            }),
        }),
    }),
});

export const { useGetProjectListQuery, useGetExperienceListQuery, useGetAcademicListQuery, usePostContactMutation } = webApiSlice;
