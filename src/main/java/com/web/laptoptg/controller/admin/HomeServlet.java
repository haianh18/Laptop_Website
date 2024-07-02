package com.web.laptoptg.controller.admin;

import com.web.laptoptg.service.OrderService;
import com.web.laptoptg.service.PaymentService;
import com.web.laptoptg.service.UserService;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet(urlPatterns = "/admin/home")
public class HomeServlet extends HttpServlet {

    private OrderService orderService;
    private UserService userService;
    private PaymentService paymentService;
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        req.getRequestDispatcher("admin-home.jsp").forward(req, resp);
    }
}
