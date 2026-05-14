package com.rutaya.repository;

import com.rutaya.entity.Usuario;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository
        extends JpaRepository<Usuario, Long> {

    // ✅ Buscar usuario por username
    Optional<Usuario> findByUsername(String username);
}


