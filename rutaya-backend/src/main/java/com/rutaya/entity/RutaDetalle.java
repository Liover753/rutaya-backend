package com.rutaya.entity;

import jakarta.persistence.*;
import lombok.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RutaDetalle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // ✅ Orden dentro de la ruta
    private int orden;

    // ✅ Tiempo estimado en minutos
    private int tiempoEstimadoMinutos;

    // ✅ Observaciones del recorrido
    @Column(columnDefinition = "TEXT")
    private String observaciones;

    // ✅ Relación con ruta
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "ruta_id")
    private Ruta ruta;

    // ✅ Lugar asociado
    @ManyToOne
    @JoinColumn(name = "lugar_id")
    private Lugar lugar;
}

