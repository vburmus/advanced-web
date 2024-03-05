<?php
/**
 * Plugin Name: Announcement Before Post
 * Plugin URI: https://example.com/plugins/Newly Added Post Highliter/
 * Description: Highlight newly posts with tag.
 * Version: 3.0
 * Requires at least: 5.0
 * Requires PHP: 7.2
 * Author: Volodymyr Burmus, Maryush Padhol
 */
function abp_admin_actions_register_menu(){
    add_options_page("Your Post Announcements", "Post Announcement", 'manage_options', "apb", "abp_admin_page");
}

add_action('admin_menu', 'abp_admin_actions_register_menu');

function abp_admin_page(){
    if (isset($_POST['abp_do_change']) && $_POST['abp_do_change'] == 'Y') {
            $opAnnouncements = get_option('abp_announcements', array());
            if (isset($_POST['abp_delete_announcement'])) {
                $deleteIndex = intval($_POST['abp_delete_announcement']); // index of the announcement to delete
                if (isset($opAnnouncements[$deleteIndex])) {
                    unset($opAnnouncements[$deleteIndex]); // delete
                    $opAnnouncements = array_values($opAnnouncements); // reset array keys
                    update_option('abp_announcements', $opAnnouncements);
                    echo '<div class="notice notice-success is-dismissible">
                                <p>Announcement deleted.</p>
                          </div>';
                }
            } else {
                $newAnnouncement = wp_kses_post($_POST['abp_new_announcement']);
                if (!empty($newAnnouncement)) {
                    $opAnnouncements[] = $newAnnouncement;
                    update_option('abp_announcements', $opAnnouncements);
                    echo '<div class="notice notice-success is-dismissible">
                                <p>New announcement added.</p>
                          </div>';
                } else {
                    echo '<div class="notice notice-error is-dismissible">
                                <p>Please enter a valid announcement.</p>
                          </div>';
                }
            }
    }
    $opAnnouncements = get_option('abp_announcements', array());

    ?>
    <div class="wrap">
        <h1>Post Announcements</h1>

        <?php if (!empty($opAnnouncements)) : ?>
            <ul>
                <?php foreach ($opAnnouncements as $index => $announcement) : ?>
                    <li>
                        <div class="apb-announcement-admin">
                            <?php echo $announcement; ?>
                            <form method="post">
                                <input type="hidden" name="abp_do_change" value="Y">
                                <input type="hidden" name="abp_delete_announcement" value="<?php echo $index; ?>">
                                <button class="delete-button" type="submit"
                                        onclick="return confirm('Are you sure you want to delete this announcement?')">
                                    X
                                </button>
                            </form>
                        </div>
                    </li>
                <?php endforeach; ?>
            </ul>
        <?php else : ?>
            <p>No announcements yet.</p>
        <?php endif; ?>

        <form name="abp_form" method="post">
            <input type="hidden" name="abp_do_change" value="Y">
            <label for="abp_new_announcement">New Announcement:</label>
            <br>
            <textarea id="abp_new_announcement" name="abp_new_announcement"></textarea>
            <p class="submit"><input type="submit" value="Submit"></p>
        </form>
    </div>
    <?php
}

function abp_display_after_title($content){
    if (is_single()) {
        $opAnnouncements = get_option('abp_announcements', array());
        if (!empty($opAnnouncements)) {
            $randomElement = $opAnnouncements[array_rand($opAnnouncements)];
            $announcement_html = "<div class='abp-announcement'>
                                        $randomElement
                                  </div>
                                  <hr>";
            $content = $announcement_html . $content;
        }
        return $content;
    }
}

add_filter('the_content', 'abp_display_after_title');

function abp_register_styles(){
    wp_register_style('abp_styles', plugins_url('/css/style.css', __FILE__));
    wp_enqueue_style('abp_styles');
}

add_action('init', 'abp_register_styles');
?>