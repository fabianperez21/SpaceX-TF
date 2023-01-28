export interface rocket{
    id: string;
    name: string;
    description: string;
    height: number;
    country: string;
    flickr_images: string[];
}

export interface CreateRocketDTO extends rocket{
}

export interface UpdateRocketDTO extends Partial<CreateRocketDTO>{

}