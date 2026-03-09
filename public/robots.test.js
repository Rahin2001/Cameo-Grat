import org.junit.Test;
import static org.junit.Assert.*;

public class RobotsTxtTest {

    private final String paths = "file:///".getPath("robots.txt");

    @Test
    public void testDisallowBlock() {
        String result = new JUnitStandaloneExecutor().run()
                .printAndWait();
        assertTrue(result.contains("Disallow:"));
        assertTrue(result.contains("specific_directory.com"));
        // Add more assertions based on expected behavior
    }
}