import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Estudiantes } from './estudiantes.interface';
import { EstudiantesService } from './estudiantes.service';

@Controller('estudiantes')
export class EstudiantesController {
    constructor(private readonly servicio: EstudiantesService) {}

    @Get()
    // http://localhost:3000/estudiantes
    ObtenerTodos(): Promise<Estudiantes[]>{
        return this.servicio.todos();
    }

    @Get(':id')
    //http://localhost:3000/estudiantes/1
    ObtenerUno(@Param('id') id): Promise<Estudiantes>{
        return this.servicio.uno(id);
    }

    @Post()
    //http://localhost:3000/estudiantes
    Crear(@Body() body: Estudiantes): Promise<Estudiantes> {
        return this.servicio.crear(body);
    }

    @Put(':id')
    //http://localhost:3000/estudiantes/1
    ActualizarUno(@Param('id') id,@Body() body: Estudiantes): Promise<Estudiantes> {
        return this.servicio.update(id,body);
    }

    @Delete(':id')
    //http://localhost:3000/estudiantes/1
    EliminarUno(@Param('id') id):Promise<Estudiantes>
    {
      return this.servicio.delete(id);
    }

}
