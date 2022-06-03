import { Model } from 'mongoose';
import { Estudiantes } from './estudiantes.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';


@Injectable()
export class EstudiantesService {


    constructor(@InjectModel('Estudiantes') 
    private readonly estudianteModel:Model<Estudiantes>){}
    
    async todos():Promise<Estudiantes[]> {
        return await this.estudianteModel.find();
      }

    async uno(id:string):Promise<Estudiantes> {
        return await this.estudianteModel.findOne({_id:id});
      }

      async crear(estudiante:Estudiantes):Promise<Estudiantes>{
        const nuevo= new this.estudianteModel(estudiante);
        return await nuevo.save();
      }

      async update(id,estudiante:Estudiantes):Promise<Estudiantes>
      {
        console.log(id);
        return await this.estudianteModel.findByIdAndUpdate(id,estudiante,{new:true});
      }

      async delete(id:string):Promise<Estudiantes>
        {
            return await this.estudianteModel.findByIdAndRemove(id);
        }

}
