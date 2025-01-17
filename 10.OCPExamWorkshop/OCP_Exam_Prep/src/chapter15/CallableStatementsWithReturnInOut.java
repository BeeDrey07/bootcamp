package chapter15;

import java.sql.*;

public class CallableStatementsWithReturnInOut {
    public static void main(String[] args) {
        var sql = "{call double_number(?)}";
        String url = "jdbc:hsqldb:file:zoo";
        try (Connection conn = DriverManager.getConnection(url);
             var cs = conn.prepareCall(sql)) {
             cs.setInt(1, 8);
             cs.registerOutParameter(1, Types.INTEGER);
             cs.execute();
             System.out.println(cs.getInt("num"));
             } catch (SQLException e) {
             System.out.println(e);
         }
    }
}
