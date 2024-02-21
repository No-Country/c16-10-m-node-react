import { Services } from 'src/common/classes/services.class';

export class UpdatePostDto {
  title: string;
  description: string;
  cateogry: string;
  services: Services[];
  nameProfessional: string;
  views: number;
}
