export interface Moment {
    Id?: number,
    title: string,
    description: string,
    image: string,
    created_at?: string,
    updated_at?: string,
    comment?: [{text: string, usernames: string}]
}