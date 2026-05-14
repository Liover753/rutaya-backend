package com.rutaya.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Lugar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    private String descripcion;

    @Column(columnDefinition = "TEXT")
    private String historia;

    // ✅ URL de imagen dinámica
    private String imagen;

    // ✅ Ubicación textual
    private String ubicacion;

    // ✅ Coordenadas para Google Maps
    private Double latitud;

    private Double longitud;

    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;
}

