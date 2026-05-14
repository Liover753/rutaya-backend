package com.rutaya.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // ✅ Usuario único
    @Column(unique = true, nullable = false)
    private String username;

    // ✅ Contraseña
    @Column(nullable = false)
    private String password;

    // ✅ Rol del usuario
    private String rol;
}
