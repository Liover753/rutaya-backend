package com.rutaya.service;

import com.rutaya.entity.Usuario;
import com.rutaya.repository.UsuarioRepository;

import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    private final UsuarioRepository repo;

    public UsuarioService(UsuarioRepository repo) {
        this.repo = repo;
    }

    // ✅ Login simple
    public Usuario login(String username, String password) {

        Usuario usuario = repo.findByUsername(username)
                .orElseThrow(() ->
                        new RuntimeException("Usuario no encontrado"));

        if (!usuario.getPassword().equals(password)) {
            throw new RuntimeException("Contraseña incorrecta");
        }

        return usuario;
    }

    // ✅ Guardar usuario admin
    public Usuario guardar(Usuario usuario) {
        return repo.save(usuario);
    }
}

