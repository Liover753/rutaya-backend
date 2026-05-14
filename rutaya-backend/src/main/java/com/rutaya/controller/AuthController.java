package com.rutaya.controller;

import com.rutaya.dto.LoginRequest;
import com.rutaya.entity.Usuario;
import com.rutaya.service.UsuarioService;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final UsuarioService service;

    public AuthController(UsuarioService service) {
        this.service = service;
    }

    // ✅ Login admin
    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody LoginRequest request) {

        Usuario usuario = service.login(
                request.getUsername(),
                request.getPassword()
        );

        Map<String, Object> response = new HashMap<>();

        response.put("mensaje", "Login correcto");
        response.put("usuario", usuario.getUsername());
        response.put("rol", usuario.getRol());

        return response;
    }

    // ✅ Crear admin
    @PostMapping("/register")
    public Usuario register(@RequestBody Usuario usuario) {

        return service.guardar(usuario);
    }
}

