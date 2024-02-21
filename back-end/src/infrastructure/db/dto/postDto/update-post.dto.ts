import { Services } from 'src/common/classes/services.class';

export class UpdatePostDto {
  title: string;
  description: string;
  category: string;
  services: Services[];
  nameProfessional: string;
  views: number;
}
