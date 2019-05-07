package Servlets;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class Servlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/xml");
        resp.setHeader("Cache-Control","no-cache");
        PrintWriter out = resp.getWriter();


        Double A = Double.parseDouble(req.getParameter("A"));
        Double B = Double.parseDouble(req.getParameter("B"));
        Double C = Double.parseDouble(req.getParameter("C"));


        System.out.println("A="+A+"B="+B+"C="+C);
        Double D = B*B-4*A*C;
        Double x1 = 0.0, x2 =0.0;
        System.out.println(D);
        String otvet = "NoN";
        if(A == 0){
            x1 = -C/B;
            otvet="{\"x1\":\""+x1+"\"}";
        }else
        if(D<0){
            otvet = "{\"x1\":\"NoN\"}";
        }else
        if( D == 0){
            x1 = (-B)/(2*A);
            otvet="{\"x1\":\""+x1+"\"}";
        }else
        if (D>0){
            x1 = (-B+Math.sqrt(D))/(2*A);
            x2 = (-B-Math.sqrt(D))/(2*A);
            otvet = otvet="{\"x1\":"+x1+",\"x2\":"+x2+"}";
        }

        System.out.println(otvet);
        out.write(otvet);
    }


}
