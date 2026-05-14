package com.rutaya.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Ruta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // ✅ Nombre de la ruta
    private String nombre;

    // ✅ Descripción general
    @Column(columnDefinition = "TEXT")
    private String descripcion;

    // ✅ Duración estimada
    private int duracionHoras;

    // ✅ Distancia aproximada
    private Double distanciaKm;

    // ✅ Nivel de dificultad
    private String dificultad;

    // ✅ Imagen principal de la ruta
    private String imagen;

    // ✅ Lugares asociados
    @JsonManagedReference
    @OneToMany(
        mappedBy = "ruta",
        cascade = CascadeType.ALL,
        fetch = FetchType.EAGER
    )
    private List<RutaDetalle> detalles;
}

