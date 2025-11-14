# Open Graph Images Guide

This document outlines the recommended Open Graph (OG) images for The Lumber River website. OG images are displayed when pages are shared on social media platforms like Facebook, Twitter, and LinkedIn.

## Image Specifications

- **Recommended size:** 1200 × 630 pixels
- **Format:** JPG or PNG
- **Aspect ratio:** 1.91:1
- **Maximum file size:** Under 5MB for optimal performance
- **Location:** `/public/og/` directory

## Recommended OG Images

### 1. default.jpg
**Description:** A scenic view of the Lumber River showing the blackwater with cypress trees reflected in the calm waters, Spanish moss hanging from branches, creating an inviting and tranquil atmosphere.

**Suggested Pages:**
- Homepage (currently in use)
- About page
- Contact page
- Any page without a specific custom image

**AI Generation Prompt:**
```
Create a wide landscape photograph (1200x630px) of a serene blackwater river in North Carolina. Show dark, tea-colored water reflecting towering bald cypress trees draped with Spanish moss. The scene should be peaceful and inviting, with dappled sunlight filtering through the canopy. Include subtle hints of wetland vegetation along the riverbank. Use natural, earthy tones with emphasis on deep greens, browns, and the distinctive amber-black color of the water. The composition should be balanced and professional, suitable for a nature conservation website.
```

### 2. wildlife-otter.jpg
**Description:** A playful North American river otter swimming or playing in the Lumber River waters, showcasing the diverse wildlife that inhabits the river ecosystem.

**Suggested Pages:**
- Blog posts about wildlife
- Wildlife-specific guide sections
- Conservation pages

**AI Generation Prompt:**
```
Create a captivating nature photograph (1200x630px) of a North American river otter in a blackwater river setting. Show the otter swimming or playing near the surface, with its sleek brown fur glistening wet. The background should feature the characteristic tea-colored water and hints of cypress trees. The image should be action-oriented yet clear, capturing the otter's playful personality. Natural lighting with rich, warm tones. Professional wildlife photography quality suitable for a nature website's social media sharing.
```

### 3. paddling-adventure.jpg
**Description:** A kayaker or canoeist peacefully paddling through a scenic section of the Lumber River, surrounded by cypress trees and natural beauty, emphasizing recreation and exploration.

**Suggested Pages:**
- Guide page (paddling and fishing guide)
- Paddling route blog posts
- Adventure-related content

**AI Generation Prompt:**
```
Create an inspiring outdoor recreation photograph (1200x630px) showing a solo kayaker paddling through a scenic blackwater river. The kayaker should be in mid-paddle stroke, viewed from behind or the side, moving through tea-colored water surrounded by towering cypress trees draped with Spanish moss. The scene should convey both adventure and tranquility. Include natural forest corridor setting with dappled sunlight. Use vibrant but natural colors that highlight the outdoor experience. Professional outdoor adventure photography style suitable for tourism and recreation websites.
```

### 4. events-community.jpg
**Description:** People gathering for a river cleanup event or community festival, showing volunteers working together or families enjoying a nature event, emphasizing community engagement and stewardship.

**Suggested Pages:**
- Upcoming events page
- River cleanup announcements
- Community engagement content

**AI Generation Prompt:**
```
Create a warm, community-focused photograph (1200x630px) showing diverse people participating in a river cleanup or outdoor nature event. Show volunteers of various ages working together along a riverbank, wearing casual outdoor clothing. Some should be picking up litter or carrying reusable bags, while others interact positively. The background should show a natural river setting with trees. The mood should be positive, collaborative, and inspiring. Natural outdoor lighting, authentic documentary-style photography. Professional nonprofit/conservation organization aesthetic suitable for social media sharing.
```

### 5. cypress-forest.jpg
**Description:** A majestic close-up or wide view of ancient bald cypress trees with their distinctive knees and Spanish moss, highlighting the unique ecosystem of the river.

**Suggested Pages:**
- About page (natural heritage section)
- Ecology-focused blog posts
- Educational content about the river ecosystem

**AI Generation Prompt:**
```
Create a dramatic nature photograph (1200x630px) featuring ancient bald cypress trees in a wetland setting. Show the distinctive cypress knees protruding from dark, reflective water, with thick Spanish moss hanging from gnarled branches. The composition should emphasize the age and majesty of these trees. Include atmospheric lighting with soft fog or mist if possible. Rich, moody colors with deep greens, grays, and blacks. The image should convey a sense of timelessness and ecological importance. Professional nature photography suitable for environmental education and conservation websites.
```

### 6. seasonal-spring.jpg
**Description:** The Lumber River during spring with blooming wildflowers, fresh green foliage, and vibrant new growth, capturing the seasonal beauty of the river ecosystem.

**Suggested Pages:**
- Seasonal blog posts
- Spring event announcements
- Nature observation guides

**AI Generation Prompt:**
```
Create a fresh, vibrant nature photograph (1200x630px) showing a blackwater river in spring. Feature new green foliage on cypress trees, blooming wildflowers along the riverbank (like native azaleas or irises), and bright, clear water reflections. The scene should feel renewed and alive with spring energy. Include a mix of textures - water, flowers, new leaves. Bright natural lighting with a clean, fresh color palette featuring greens, yellows, and soft pastels. Professional seasonal nature photography suitable for a nature tourism website.
```

### 7. birds-wading.jpg
**Description:** Wading birds such as great blue herons, egrets, or wood storks along the riverbank or in shallow water, emphasizing the rich birdlife of the Lumber River.

**Suggested Pages:**
- Bird watching content
- Wildlife observation guides
- Seasonal bird migration posts

**AI Generation Prompt:**
```
Create a stunning wildlife photograph (1200x630px) featuring wading birds in a blackwater river habitat. Show one or more great blue herons, white egrets, or similar wading birds in their natural environment along the river's edge. The birds should be in an active pose - hunting, wading, or standing alert. Background should show the characteristic tea-colored water and wetland vegetation. Natural, golden hour lighting if possible. Sharp focus on the bird(s) with a slightly soft background. Professional bird photography quality suitable for nature tourism and wildlife observation websites.
```

## Implementation Notes

### Using Custom OG Images

To use a specific OG image for a page, pass the image prop to the Layout component:

```astro
<Layout 
  title="River Otter Sightings Increase" 
  description="Wildlife experts report more otter families along the Lumber River"
  image="/og/wildlife-otter.jpg"
>
```

### Fallback Behavior

If no image is specified, the SEO component will automatically use `/og/default.jpg` as the fallback image.

### Dynamic Content Pattern

For blog posts or dynamic pages, you can create a pattern like this:

```astro
---
const post = {
  title: "Spring Wildflowers Bloom",
  excerpt: "The riverbanks come alive with color",
  ogImage: "/og/seasonal-spring.jpg"
};

const seoProps = {
  title: `${post.title} | The Lumber River`,
  description: post.excerpt,
  image: post.ogImage
};
---

<Layout {...seoProps}>
  <!-- Page content -->
</Layout>
```

## Creating the Images

These images should be created or sourced and placed in the `/public/og/` directory. Options include:

1. **Photography:** Commission or source professional nature photography
2. **AI Generation:** Use the provided prompts with tools like Midjourney, DALL-E, or Stable Diffusion
3. **Stock Photography:** Source from sites like Unsplash, Pexels (ensure commercial use rights)
4. **Custom Design:** Work with a designer to create branded images

## Testing

After adding images, test them using:

- **Facebook Sharing Debugger:** https://developers.facebook.com/tools/debug/
- **Twitter Card Validator:** https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/

This ensures images display correctly when shared on social media platforms.
